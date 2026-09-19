export default function ThemeScript() {
  const script = `
    try {
      const saved = localStorage.getItem('theme');
      const theme = saved === 'light' || saved === 'dark' ? saved : 'dark';
      document.documentElement.dataset.theme = theme;
    } catch { document.documentElement.dataset.theme = 'dark'; }
  `;
  return <script dangerouslySetInnerHTML={{__html: script}} />;
}
