type CorePageProps = {
  title: string;
  subtitle: string;
};

export default function CorePage({ title, subtitle }: CorePageProps) {
  return (
    <main>
      <h1>{title}</h1>

      <p>
        {subtitle}
      </p>
    </main>
  );
}