type ResponsivePictureProps = {
  alt: string;
  className?: string;
  loading?: "eager" | "lazy";
  priority?: boolean;
};

export function HeroPicture({ alt, className, loading = "lazy", priority = false }: ResponsivePictureProps) {
  return (
    <picture className={className}>
      <source media="(max-width: 640px)" srcSet="/images/site-banner-640.jpg" />
      <source media="(max-width: 1100px)" srcSet="/images/site-banner-1100.jpg" />
      <source media="(min-width: 1101px)" srcSet="/images/site-banner-1600.jpg" />
      <img
        src="/images/site-banner-1600.jpg"
        alt={alt}
        width={1600}
        height={667}
        loading={loading}
        fetchPriority={priority ? "high" : "auto"}
        decoding="async"
      />
    </picture>
  );
}
