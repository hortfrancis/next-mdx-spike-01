interface CardProps {
  title: string;
  type?: 'info' | 'warning' | 'error' | 'default';
  children?: React.ReactNode;
}

export default function Card({
  title,
  type = 'default',
  children
}: CardProps) {
  const typeStyles = {
    info: { border: 'border-blue-500 ', background: 'bg-blue-100 hover:bg-blue-200' },
    warning: { border: 'border-yellow-500', background: 'bg-yellow-100 hover:bg-yellow-200' },
    error: { border: 'border-red-500', background: 'bg-red-100 hover:bg-red-200' },
    default: { border: 'border-gray-500', background: 'bg-gray-100 hover:bg-gray-200' },
  };

  const borderStyle = typeStyles[type]?.border || typeStyles['default'].border;
  const backgroundStyle = typeStyles[type]?.background || typeStyles['default'].background;

  return (
    <div data-testid='card-component' className={`max-w-md p-4 border rounded-md shadow-sm ${backgroundStyle} ${borderStyle} transition-bg duration-300`}>
      <h2 className='text-lg font-semibold'>{title}</h2>
      <div className='mt-2 space-y-2'>{children}</div>
    </div>
  );
}
