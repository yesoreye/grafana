import { css } from '@emotion/css';
import React from 'react';

import { GrafanaTheme2 } from '@grafana/data';
import { t, Trans } from '@grafana/i18n';

import { useTheme2 } from '../../themes/ThemeContext';

/**
 * Example component demonstrating Tailwind CSS integration in Grafana.
 *
 * This component shows how Tailwind utility classes can be used alongside
 * the existing Emotion CSS-in-JS approach during the migration period.
 */
export const TailwindExample: React.FC = () => {
  const theme = useTheme2();

  // Emotion styles (existing approach)
  const emotionStyles = getEmotionStyles(theme);

  return (
    <div className="p-4 space-y-4">
      <h2 className="text-2xl font-bold mb-4">
        <Trans i18nKey="tailwind-example.title">Tailwind CSS Integration Example</Trans>
      </h2>

      {/* Pure Tailwind approach */}
      <div className="grafana-card">
        <h3 className="text-lg font-semibold mb-2">
          <Trans i18nKey="tailwind-example.pure-tailwind-title">Pure Tailwind Card</Trans>
        </h3>
        <p className="text-gray-700">
          <Trans i18nKey="tailwind-example.pure-tailwind-description">
            This card uses only Tailwind utility classes for styling.
          </Trans>
        </p>
        <button className="grafana-button bg-blue-500 hover:bg-blue-600 text-white mt-3">
          <Trans i18nKey="tailwind-example.tailwind-button">Tailwind Button</Trans>
        </button>
      </div>

      {/* Mixed approach: Tailwind + Emotion */}
      <div className={`grafana-card ${emotionStyles.mixedCard}`}>
        <h3 className="text-lg font-semibold mb-2">
          <Trans i18nKey="tailwind-example.mixed-title">Mixed Approach</Trans>
        </h3>
        <p className="text-gray-700">
          <Trans i18nKey="tailwind-example.mixed-description">
            This card combines Tailwind utilities with Emotion styles for theme-aware colors.
          </Trans>
        </p>
        <button className={`grafana-button ${emotionStyles.themedButton}`}>
          <Trans i18nKey="tailwind-example.mixed-button">Mixed Button</Trans>
        </button>
      </div>

      {/* Pure Emotion approach (existing) */}
      <div className={emotionStyles.emotionCard}>
        <h3 className={emotionStyles.heading}>
          <Trans i18nKey="tailwind-example.emotion-title">Pure Emotion Card</Trans>
        </h3>
        <p className={emotionStyles.text}>
          <Trans i18nKey="tailwind-example.emotion-description">
            This card uses the traditional Emotion CSS-in-JS approach.
          </Trans>
        </p>
        <button className={emotionStyles.button}>
          <Trans i18nKey="tailwind-example.emotion-button">Emotion Button</Trans>
        </button>
      </div>

      {/* Tailwind form example */}
      <div className="grafana-card">
        <h3 className="text-lg font-semibold mb-2">
          <Trans i18nKey="tailwind-example.form-title">Tailwind Form Example</Trans>
        </h3>
        <input
          type="text"
          className="grafana-input mb-2"
          placeholder={t('tailwind-example.placeholder', 'Enter text...')}
        />
        <div className="flex gap-2">
          <button className="grafana-button bg-green-500 hover:bg-green-600 text-white">
            <Trans i18nKey="tailwind-example.submit-button">Submit</Trans>
          </button>
          <button className="grafana-button bg-gray-300 hover:bg-gray-400 text-gray-800">
            <Trans i18nKey="tailwind-example.cancel-button">Cancel</Trans>
          </button>
        </div>
      </div>
    </div>
  );
};

// Emotion styles for comparison
const getEmotionStyles = (theme: GrafanaTheme2) => ({
  mixedCard: css({
    backgroundColor: theme.colors.background.secondary,
    borderColor: theme.colors.border.weak,
  }),
  themedButton: css({
    backgroundColor: theme.colors.primary.main,
    color: theme.colors.primary.contrastText,
    '&:hover': {
      backgroundColor: theme.colors.primary.shade,
    },
  }),
  emotionCard: css({
    padding: theme.spacing(2),
    borderRadius: theme.shape.radius.default,
    backgroundColor: theme.colors.background.secondary,
    boxShadow: theme.shadows.z1,
  }),
  heading: css({
    fontSize: theme.typography.h3.fontSize,
    fontWeight: theme.typography.h3.fontWeight,
    marginBottom: theme.spacing(1),
  }),
  text: css({
    color: theme.colors.text.secondary,
  }),
  button: css({
    padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
    borderRadius: theme.shape.radius.default,
    backgroundColor: theme.colors.primary.main,
    color: theme.colors.primary.contrastText,
    border: 'none',
    cursor: 'pointer',
    [theme.transitions.handleMotion('no-preference')]: {
      transition: theme.transitions.create(['background-color']),
    },
    '&:hover': {
      backgroundColor: theme.colors.primary.shade,
    },
  }),
});

export default TailwindExample;
