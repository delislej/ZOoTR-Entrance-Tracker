import { useTrackerContext } from "../Hooks/useTrackerContext";
import Entrance from "./Entrance";
import React from "react";

export default function TypeSection({
    type,
    section,
    options
}) {
    const {
        typeShouldBeDisplayed
    } = useTrackerContext();
    let output = [];
    // console.log(type, section, options)
    return (
        <React.Fragment>
            {Object.entries(section).sort().map(([areaName, area], i) => {
                const entrances = [];
                Object.entries(area.entrances).sort().map(([entranceName, entrance], j) => {
                    // console.error(entrance.type, options[entrance.type])
                    entrances.push(<div key={`entrance-${i}-${j}`}>
                        <Entrance
                            entrance={entrance}
                            areaName={areaName}
                            entranceName={entranceName}
                            fromType={type}
                            options={options[entrance.type]}
                        />
                        <div key={`entrance-sep-${i}-${j}`} className="entrance-separator"/>
                    </div>);
                    return null;
                });
                if (entrances.length > 0) {
                    output.push(<div className="card area-card" key={`area-${i}`}>
                        <div className="card-header area-card-header has-background-dark">
                            <h5 className="is-size-5 has-text-weight-semibold area-card-name">{areaName}</h5>
                            <span
                                className="icon has-text-white"
                            >
                            {/*{area.isExpanded ?*/}
                            {/*    <i className="fa fa-minus area-expand-icon"></i> :*/}
                            {/*    <i className="fa fa-plus area-expand-icon"></i>*/}
                            {/*}*/}
                            </span>
                        </div>
                        <div className="card-content area-card-content">
                            <div className="columns card-columns">
                                <div className="column card-column">
                                    {entrances}
                                </div>
                            </div>
                        </div>
                    </div>);
                }
                return null;
            })}
            {output.length > 0 ? output : "Settings lead to vanilla layout"}
        </React.Fragment>
    )
}
