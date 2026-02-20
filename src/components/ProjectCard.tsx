type ProjectCardProps = {
  title: string;
  description: string;
  tech?: string;
  image?: string;
};

export default function ProjectCard({
  title,
  description,
  tech,
  image,
}: ProjectCardProps) {
  return (
    <div className="overflow-hidden rounded-xl border bg-white shadow-sm transition hover:shadow-md">
      
      {/* Image Section */}
      <div className="h-48 w-full overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="h-full w-full bg-gradient-to-br from-gray-100 to-gray-300 flex items-center justify-center text-gray-500 text-sm">
            Image Coming Soon
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="space-y-3 p-6">
        <h2 className="text-xl font-semibold">{title}</h2>

        {tech && (
          <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">
            {tech}
          </p>
        )}

        <p className="text-gray-700 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}