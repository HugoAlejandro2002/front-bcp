const TeaserList = ({ children }) => {
    return (
        <section className="teaser-list bg-background py-8">
            <div className="container mx-auto">
                <div className="teaser-list-wrapper flex flex-wrap">
                    {children}
                </div>
            </div>
        </section>
    );
};

export default TeaserList;