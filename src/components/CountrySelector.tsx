'use client';

import React, { useState, useRef, useEffect, useMemo } from 'react';
import { countries } from 'countries-list';
import * as Flags from 'country-flag-icons/react/3x2';

interface CountryItem {
  code: string;
  name: string;
}

// Prepare full list of countries sorted alphabetically
const ALL_COUNTRIES: CountryItem[] = Object.entries(countries)
  .map(([code, data]) => ({
    code,
    name: data.name,
  }))
  .sort((a, b) => a.name.localeCompare(b.name));

// Dynamic flag renderer helper
function RenderFlag({ code, className }: { code: string; className?: string }) {
  const FlagComponent = (Flags as Record<string, React.ComponentType<{ className?: string; title?: string }>>)[code];
  if (FlagComponent) {
    return <FlagComponent className={className} title={code} />;
  }
  return <span style={{ fontSize: '1rem', display: 'inline-block', width: '20px', textAlign: 'center' }}>🌐</span>;
}

interface CountrySelectorProps {
  value: string;
  onChange: (countryName: string) => void;
  required?: boolean;
}

export function CountrySelector({ value, onChange, required }: CountrySelectorProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const containerRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Find currently selected country item
  const selectedCountry = useMemo(() => {
    return ALL_COUNTRIES.find(
      (c) => c.name.toLowerCase() === value.toLowerCase() || c.code === value
    );
  }, [value]);

  // Filtered countries based on search query
  const filteredCountries = useMemo(() => {
    if (!searchQuery.trim()) return ALL_COUNTRIES;
    const q = searchQuery.toLowerCase();
    return ALL_COUNTRIES.filter(
      (c) => c.name.toLowerCase().includes(q) || c.code.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  // Focus search input when dropdown opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 50);
    } else {
      setSearchQuery('');
    }
  }, [isOpen]);

  // Close on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (country: CountryItem) => {
    onChange(country.name);
    setIsOpen(false);
  };

  return (
    <div className="country-selector-container" ref={containerRef}>
      {/* Hidden native input for required form validation */}
      <input
        type="text"
        required={required}
        value={value}
        onChange={() => {}}
        tabIndex={-1}
        aria-hidden="true"
        style={{
          opacity: 0,
          width: 0,
          height: 0,
          position: 'absolute',
          pointerEvents: 'none',
        }}
      />

      {/* Main Select Button Trigger */}
      <button
        type="button"
        className={`country-selector-btn ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <div className="country-selector-value">
          {selectedCountry ? (
            <>
              <span className="country-flag-icon">
                <RenderFlag code={selectedCountry.code} />
              </span>
              <span className="country-name-text">{selectedCountry.name}</span>
            </>
          ) : (
            <span className="country-placeholder">Select Country</span>
          )}
        </div>

        <svg
          className={`country-chevron ${isOpen ? 'open' : ''}`}
          width="12"
          height="8"
          viewBox="0 0 12 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1.5L6 6.5L11 1.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Dropdown Popover */}
      {isOpen && (
        <div className="country-dropdown-popover" role="listbox">
          {/* Search Input Filter */}
          <div className="country-search-box">
            <svg
              className="country-search-icon"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              ref={searchInputRef}
              type="text"
              className="country-search-input"
              placeholder="Search country..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onClick={(e) => e.stopPropagation()}
            />
            {searchQuery && (
              <button
                type="button"
                className="country-search-clear"
                onClick={(e) => {
                  e.stopPropagation();
                  setSearchQuery('');
                  searchInputRef.current?.focus();
                }}
              >
                ✕
              </button>
            )}
          </div>

          {/* Country List Items */}
          <div className="country-list-scroll">
            {filteredCountries.length > 0 ? (
              filteredCountries.map((c) => {
                const isSelected = selectedCountry?.code === c.code;
                return (
                  <div
                    key={c.code}
                    className={`country-list-item ${isSelected ? 'selected' : ''}`}
                    onClick={() => handleSelect(c)}
                    role="option"
                    aria-selected={isSelected}
                  >
                    <span className="country-flag-icon">
                      <RenderFlag code={c.code} />
                    </span>
                    <span className="country-item-name">{c.name}</span>
                    <span className="country-item-code">{c.code}</span>
                  </div>
                );
              })
            ) : (
              <div className="country-no-results">No countries found</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
