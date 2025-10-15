# Tailwind CSS Migration Guide

This guide explains how to use Tailwind CSS in Grafana alongside the existing Emotion CSS-in-JS approach during the migration period.

## Overview

Grafana is gradually migrating from Emotion CSS-in-JS to Tailwind CSS for styling. This migration is being done incrementally to maintain stability and allow both approaches to coexist.

## Current State

- **Tailwind CSS** is now available and configured in the project
- **Emotion CSS** remains the primary styling method
- Both can be used together during the migration period
- Tailwind's preflight (CSS reset) is disabled to prevent conflicts

## Using Tailwind CSS

### Basic Usage

You can use Tailwind utility classes directly in your components:

```tsx
import React from 'react';

export const MyComponent = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Hello Tailwind</h2>
      <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Click me</button>
    </div>
  );
};
```

### Custom Grafana Utilities

Custom Tailwind component classes are defined in `/public/styles/tailwind.css`:

- `.grafana-button` - Base button styling
- `.grafana-card` - Card container styling
- `.grafana-input` - Input field styling

```tsx
<div className="grafana-card">
  <input className="grafana-input" type="text" />
  <button className="grafana-button bg-blue-500 text-white">Submit</button>
</div>
```

### Combining with Emotion

During the migration, you may need to combine Tailwind utilities with Emotion styles:

```tsx
import { css } from '@emotion/css';
import { useTheme2 } from '@grafana/ui';

export const MixedComponent = () => {
  const theme = useTheme2();

  const themedStyles = css({
    backgroundColor: theme.colors.background.primary,
    color: theme.colors.text.primary,
  });

  return <div className={`p-4 rounded-lg ${themedStyles}`}>Mixed styling approach</div>;
};
```

## Configuration

### Tailwind Config

The Tailwind configuration is in `/tailwind.config.js`:

- Content paths include `packages/grafana-ui` and `public` directories
- Theme is extended with Grafana-specific spacing and colors
- Preflight is disabled to prevent CSS conflicts

### PostCSS Config

PostCSS is configured in `/scripts/webpack/postcss.config.js` to process:

1. Tailwind CSS
2. Autoprefixer
3. PostCSS Reporter

## Migration Strategy

### Phase 1: Setup (Current)

- ✅ Install Tailwind CSS
- ✅ Configure build pipeline
- ✅ Create example components
- ✅ Document usage

### Phase 2: Gradual Adoption

- New components should prefer Tailwind utilities where appropriate
- Use Emotion for theme-dependent colors and complex dynamic styles
- Combine both approaches as needed

### Phase 3: Full Migration

- Convert existing Emotion styles to Tailwind
- Create comprehensive Tailwind theme matching Grafana design system
- Remove Emotion dependencies (future)

## Best Practices

### When to Use Tailwind

- Static layouts and spacing
- Common UI patterns (buttons, cards, forms)
- Responsive design
- Simple hover/focus states

### When to Use Emotion

- Theme-dependent colors
- Complex dynamic styles
- Component-specific styles with many variants
- Animations and transitions requiring theme values

### Hybrid Approach

For best results during migration:

1. Use Tailwind for structural styling (layout, spacing, sizing)
2. Use Emotion for theme-aware colors and complex logic
3. Keep component styles close to components
4. Prefer composition over duplication

## Example Component

See `/packages/grafana-ui/src/components/TailwindExample/TailwindExample.tsx` for a complete example demonstrating:

- Pure Tailwind styling
- Mixed Tailwind + Emotion approach
- Pure Emotion styling (existing approach)
- Form styling with Tailwind

## Testing

To verify Tailwind is working:

1. Build the project: `yarn build`
2. Check that Tailwind classes are processed
3. Verify no style conflicts with existing components
4. Test in both light and dark themes

## Resources

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Emotion Documentation](https://emotion.sh/docs/introduction)
- [Grafana UI Package](./packages/grafana-ui)

## Questions?

For questions or issues with the Tailwind migration, please:

1. Check this documentation
2. Review the example component
3. Open an issue with the `tailwind-migration` label
