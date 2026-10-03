import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [cursorType, setCursorType] = useState('default');
  const [cursorText, setCursorText] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const handleMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      // Check cursor data attribute on hover targets
      const target = e.target.closest('[data-cursor]');
      if (target) {
        const type = target.getAttribute('data-cursor');
        setCursorType(type);
        if (type === 'view') {
          setCursorText('VIEW');
        } else if (type === 'open') {
          setCursorText('OPEN');
        } else if (type === 'project') {
          setCursorText('EXPLORE');
        } else {
          setCursorText('');
        }
      } else if (e.target.closest('a, button, [role="button"]')) {
        setCursorType('pointer');
        setCursorText('');
      } else {
        setCursorType('default');
        setCursorText('');
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  const isExpanded = cursorType === 'view' || cursorType === 'open' || cursorType === 'project';
  const isPointer = cursorType === 'pointer';

  return (
    <div
      className="pointer-events-none fixed inset-0 z-50 overflow-hidden"
      style={{ opacity: isVisible ? 1 : 0 }}
    >
      <div
        className={`fixed -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center transition-all duration-200 ease-out ${
          isExpanded
            ? 'w-20 h-20 bg-purple-600/90 text-white text-[11px] font-mono font-bold tracking-widest backdrop-blur-md shadow-2xl shadow-purple-600/40 scale-100'
            : isPointer
            ? 'w-10 h-10 bg-purple-600/20 border border-purple-500/40 scale-110'
            : 'w-3 h-3 bg-purple-600 shadow-sm shadow-purple-600/50 scale-100'
        }`}
        style={{
          left: `${pos.x}px`,
          top: `${pos.y}px`
        }}
      >
        {isExpanded && <span className="animate-in fade-in duration-150">{cursorText}</span>}
      </div>
    </div>
  );
}
