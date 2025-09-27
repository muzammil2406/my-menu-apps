# Nested Menu Drawer

> An accessible, animated nested drawer menu component built with React and TypeScript, designed for exceptional user experience and accessibility standards.

<img width="1919" height="909" alt="image" src="https://github.com/user-attachments/assets/dc7ea129-ecf4-4d1b-a9c7-62b402a31276" />


## ✨ Features

- 🚀 **Multi-level Navigation** - Seamless nested menu structure with unlimited depth
- 🎨 **Smooth Animations** - Direction-aware slide transitions with GPU acceleration
- ♿ **Full Accessibility** - WCAG 2.1 compliant with screen reader support
- ⌨️ **Keyboard Navigation** - Complete keyboard control with intuitive shortcuts
- 📱 **Responsive Design** - Adaptive layout for all screen sizes
- 🎯 **Focus Management** - Proper focus trapping and restoration
- ⚡ **Performance Optimized** - 60fps animations with minimal re-renders
- 🎛️ **Highly Customizable** - Flexible theming and configuration options

## 🚀 Quick Start

### Installation

```bash
# npm
npm install

# yarn
yarn install

# pnpm
pnpm install
```

### Development

```bash
# Start development server
npm run dev
# or
yarn dev
```

### Production

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## 📋 Component Overview

### Core Capabilities

- **Nested Navigation**: Navigate through multiple menu levels with smooth transitions
- **Back Navigation**: Intuitive breadcrumb-style navigation with history tracking
- **Direction-Aware Animations**: Forward slides left, backward slides right
- **Accessibility First**: Full ARIA compliance and keyboard navigation
- **Focus Management**: Automatic focus handling and trap management
- **Customizable**: Extensive theming and configuration options

### Animation System

- **Forward Navigation**: Slide left transition (→)
- **Backward Navigation**: Slide right transition (←)
- **Duration**: ~200ms for optimal perceived performance
- **Hardware Acceleration**: GPU-optimized transforms
- **Smooth Performance**: Consistent 60fps animations


### Type System

```typescript
interface MenuItem {
  id: string;
  label: string;
  children?: MenuItem[];
  icon?: React.ReactNode;
  href?: string;
  onSelect?: () => void;
  disabled?: boolean;
  ariaLabel?: string;
}
```

## ♿ Accessibility Features

### Keyboard Navigation

| Key | Action |
|-----|--------|
| `↑` / `↓` | Navigate menu items |
| `Enter` / `Space` | Select menu item |
| `←` / `Backspace` | Go back one level |
| `Esc` | Close drawer |
| `Tab` | Navigate between interactive elements |

### Screen Reader Support

- **ARIA Roles**: Proper `menu` and `menuitem` roles
- **Hierarchy Announcements**: Clear level indicators
- **Focus Announcements**: Current item and position
- **State Changes**: Open/close and navigation feedback

### Focus Management

- ✅ Focus trap within drawer
- ✅ Initial focus on first interactive element
- ✅ Focus restoration on close
- ✅ Visible focus indicators
- ✅ Logical tab order


## 🧪 Testing Checklist

### Functionality
- [ ] Opens and closes correctly
- [ ] Navigates into submenus
- [ ] Back navigation works properly
- [ ] Handles empty/null menu data

### Accessibility
- [ ] Full keyboard navigation
- [ ] Screen reader compatibility
- [ ] Focus management
- [ ] ARIA attributes correct

### Performance
- [ ] Smooth 60fps animations
- [ ] No unnecessary re-renders
- [ ] Responsive on all devices
- [ ] Memory leak prevention

## 🔧 Technical Requirements

### Dependencies

- **React** ^18.0.0
- **TypeScript** ^4.9.0
- **Framer Motion** ^10.0.0 (for animations)
- **Tailwind CSS** ^3.3.0 (for styling)

### Browser Support

- Chrome/Edge 88+
- Firefox 85+
- Safari 14+
- Mobile browsers (iOS 14+, Android 8+)

## 🚀 Performance Optimizations

- **Memoization**: React.memo for component optimization
- **Virtual Scrolling**: For large menu datasets
- **GPU Acceleration**: CSS transforms for animations
- **Lazy Loading**: Dynamic import for heavy menu items
- **Bundle Splitting**: Separate chunks for better loading

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Design inspiration from modern mobile app navigation patterns
- Accessibility guidelines from WCAG 2.1 and ARIA best practices
- Animation concepts from Material Design and Apple Human Interface Guidelines

---

<div align="center">
  <p>Built with ❤️ for exceptional user experiences</p>
  <p>
    <a href="#top">⬆️ Back to Top</a>
  </p>
</div>

