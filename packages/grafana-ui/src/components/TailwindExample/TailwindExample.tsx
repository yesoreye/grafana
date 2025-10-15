import React from 'react';
import { css } from '@emotion/css';
import { GrafanaTheme2 } from '@grafana/data';
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
      <h2 className="text-2xl font-bold mb-4">Tailwind CSS Integration Example</h2>

      {/* Pure Tailwind approach */}
      <div className="grafana-card">
        <h3 className="text-lg font-semibold mb-2">Pure Tailwind Card</h3>
        <p className="text-gray-700">This card uses only Tailwind utility classes for styling.</p>
        <button className="grafana-button bg-blue-500 hover:bg-blue-600 text-white mt-3">Tailwind Button</button>
      </div>

      {/* Mixed approach: Tailwind + Emotion */}
      <div className={`grafana-card ${emotionStyles.mixedCard}`}>
        <h3 className="text-lg font-semibold mb-2">Mixed Approach</h3>
        <p className="text-gray-700">
          This card combines Tailwind utilities with Emotion styles for theme-aware colors.
        </p>
        <button className={`grafana-button ${emotionStyles.themedButton}`}>Mixed Button</button>
      </div>

      {/* Pure Emotion approach (existing) */}
      <div className={emotionStyles.emotionCard}>
        <h3 className={emotionStyles.heading}>Pure Emotion Card</h3>
        <p className={emotionStyles.text}>This card uses the traditional Emotion CSS-in-JS approach.</p>
        <button className={emotionStyles.button}>Emotion Button</button>
      </div>

      {/* Tailwind form example */}
      <div className="grafana-card">
        <h3 className="text-lg font-semibold mb-2">Tailwind Form Example</h3>
        <input type="text" className="grafana-input mb-2" placeholder="Enter text..." />
        <div className="flex gap-2">
          <button className="grafana-button bg-green-500 hover:bg-green-600 text-white">Submit</button>
          <button className="grafana-button bg-gray-300 hover:bg-gray-400 text-gray-800">Cancel</button>
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
    transition: 'background-color 0.2s',
    '&:hover': {
      backgroundColor: theme.colors.primary.shade,
    },
  }),
});

export default TailwindExample;
