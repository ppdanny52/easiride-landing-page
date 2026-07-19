const stats = [
  { value: '100%', label: 'Professionally Verified Drivers', suffix: '' },
  { value: '5 min', label: 'Average Pickup Time', suffix: '' },
  { value: '24/7', label: 'SOS Emergency Support', suffix: '' },
  { value: '0', label: 'Surge Pricing Surprises', suffix: '' },
];

export function StatsBar() {
  return (
    <section className="border-y border-border bg-surface-elevated">
      <div className="container-wide grid grid-cols-2 gap-x-4 gap-y-8 px-6 py-12 md:grid-cols-4 md:px-10 md:py-14 lg:px-16">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center md:text-left">
            <p className="text-3xl font-extrabold tracking-tight text-brand md:text-4xl">
              {stat.value}
              {stat.suffix && (
                <span className="ml-1 text-2xl text-brand/70">{stat.suffix}</span>
              )}
            </p>
            <p className="mt-2 text-sm font-medium text-ink-muted">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
