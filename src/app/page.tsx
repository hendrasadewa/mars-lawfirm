function Home() {
  const founder = 'Maryana Muktiono, SH., MKn, Ce Me';

  return (
    <main>
      <div
        className="min-h-screen flex items-center justify-center bg-no-repeat bg-center"
        style={{
          backgroundImage: `url('/img/bg-hero.jpg')`,
        }}
      >
        <article className="divide-y divide-amber-400 backdrop-blur p-4 rounded-sm">
          <h1 className="text-4xl lg:text-8xl font-serif text-amber-400 text-center">
            Mars &amp; Partner
          </h1>
          <p className="text-xl lg:text-4xl font-serif text-amber-200 text-center">
            Attorney and Lawyer Firm
          </p>
        </article>
      </div>
      <div>
        <article className="flex justify-center">
          <section className="p-12">
            <header>
              <h2 className="text-4xl lg:text-8xl font-serif py-4 text-amber-400">
                About Our Firm
              </h2>
            </header>
            <div className="flex-col items-center gap-4 lg:flex lg:items-start lg:flex-row">
              <div className="prose">
                <p>
                  MARS & Partners was established in 2002 by {founder}
                  in order to provide quality solutions for commercial and
                  corporate legal issues in Indonesia. The firm since has
                  expanded to legal experts from various fields of legal
                  expertise such as bankruptcy law, litigation & dispute
                  resolution, maritime law, real estate & property law, foreign
                  invesment assistance, banking & financial law and intellectual
                  property law. MARS & Partners has since became a leading legal
                  firm in Indonesia in handling corporate and commercial cases.
                </p>
                <p>
                  The firm maintains its commitment to provide the best legal
                  advice and representation for its clients in Indonesia,
                  utilising nearly 20 years of legal expertise and experience to
                  offer the most efficient solutions to legal and bureaucratic
                  obstacles to foreign investors and local businesses alike.
                </p>
              </div>
              <figure>
                <img
                  src="/img/founder.png"
                  className="w-80 rounded shadow-md"
                />
                <figcaption className="font-serif text-center text-md">
                  <p className="font-bold text-amber-500">{founder}</p>
                  <p>Managing Partner of Mars & Partners</p>
                </figcaption>
              </figure>
            </div>
          </section>
        </article>
      </div>
    </main>
  );
}

export default Home;
