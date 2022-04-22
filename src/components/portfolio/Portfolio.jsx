import { useEffect, useState } from "react";
import "./portfolio.scss";
import { featuredPortfolio } from "../../data";

export default function Portfolio() {
    const [selected, setSelected] = useState("featured");
    const [data, setData] = useState([]);
    const list = [
        {
            id: "featured",
            title: "Featured",
        },
    ];

    useEffect(() => {
        switch (selected) {
            case "featured":
                setData(featuredPortfolio);
                break;
        }
    }, [selected]);

    return (
        <div className="portfolio" id="portfolio">
            <h1>Projects</h1>
            <div className="container">
                {data.map((d) => (
                    <div className="item">
                        <img src={d.img} alt="" />
                        <h3>{d.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
}
