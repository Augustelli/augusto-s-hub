// File: `src/components/LanguageSwitcher.tsx`
        import React, { useEffect, useRef, useState } from 'react';
        import { useTranslation } from 'react-i18next';

        type Lang = { code: string; label: string; flag: string };

        const LANGS: Lang[] = [
          { code: 'en', label: 'English', flag: '🇬🇧' },
          { code: 'es', label: 'Español', flag: '🇪🇸' },
        ];

        export default function LanguageSwitcher(): JSX.Element {
          const { i18n } = useTranslation();
          const [open, setOpen] = useState(false);
          const btnRef = useRef<HTMLButtonElement | null>(null);
          const menuRef = useRef<HTMLUListElement | null>(null);

          useEffect(() => {
            const handleOutside = (e: MouseEvent) => {
              if (
                open &&
                menuRef.current &&
                btnRef.current &&
                !menuRef.current.contains(e.target as Node) &&
                !btnRef.current.contains(e.target as Node)
              ) {
                setOpen(false);
              }
            };
            document.addEventListener('mousedown', handleOutside);
            return () => document.removeEventListener('mousedown', handleOutside);
          }, [open]);

          useEffect(() => {
            document.documentElement.lang = i18n.language || 'en';
          }, [i18n.language]);

          const select = (code: string) => {
            i18n.changeLanguage(code);
            localStorage.setItem('i18nextLng', code);
            setOpen(false);
            btnRef.current?.focus();
          };

          const current = LANGS.find(l => l.code === i18n.language) ?? LANGS[0];

          return (
            <div style={{ position: 'relative', display: 'inline-block' }}>
              <button
                ref={btnRef}
                aria-haspopup="menu"
                aria-expanded={open}
                aria-label={`Change language (current: ${current.label})`}
                onClick={() => setOpen(v => !v)}
                onKeyDown={(e) => {
                  if (e.key === 'ArrowDown') {
                    e.preventDefault();
                    setOpen(true);
                    menuRef.current?.querySelector('button')?.focus();
                  }
                }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  padding: '6px 10px',
                  borderRadius: 999,
                  border: '1px solid rgba(0,0,0,0.08)',
                  background: 'var(--card-bg, #fff)',
                  color: 'var(--text, #111)', // <- ensure text contrasts with background in both modes
                  cursor: 'pointer',
                  fontSize: 14,
                }}
              >
                <span aria-hidden style={{ fontSize: 18 }}>{current.flag}</span>
                <span style={{ fontWeight: 600 }}>{current.code.toUpperCase()}</span>
                <svg width="12" height="12" viewBox="0 0 24 24" aria-hidden style={{ opacity: 0.7, fill: 'currentColor' }}>
                  <path d="M7 10l5 5 5-5z" />
                </svg>
              </button>

              {open && (
                <ul
                  ref={menuRef}
                  role="menu"
                  aria-label="Language selector"
                  style={{
                    position: 'absolute',
                    right: 0,
                    marginTop: 8,
                    listStyle: 'none',
                    padding: 8,
                    borderRadius: 8,
                    boxShadow: '0 6px 18px rgba(0,0,0,0.08)',
                    background: 'var(--card-bg, #fff)',
                    color: 'var(--text, #111)', // <- menu items inherit same readable color
                    minWidth: 160,
                    zIndex: 50,
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Escape') { setOpen(false); btnRef.current?.focus(); }
                  }}
                >
                  {LANGS.map(lang => (
                    <li key={lang.code} role="none" style={{ marginBottom: 6 }}>
                      <button
                        role="menuitemradio"
                        aria-checked={i18n.language === lang.code}
                        onClick={() => select(lang.code)}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 10,
                          width: '100%',
                          padding: '6px 8px',
                          borderRadius: 6,
                          background: i18n.language === lang.code ? 'rgba(0,0,0,0.06)' : 'transparent',
                          border: 'none',
                          cursor: 'pointer',
                          textAlign: 'left',
                          color: 'inherit', // inherit the readable color set on the list
                        }}
                      >
                        <span style={{ fontSize: 18 }}>{lang.flag}</span>
                        <span>{lang.label}</span>
                        <span style={{ marginLeft: 'auto', opacity: i18n.language === lang.code ? 1 : 0.3 }}>
                          {i18n.language === lang.code ? '✓' : ''}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          );
        }