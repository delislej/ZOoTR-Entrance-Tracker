import EntranceTypes from "./DataObjects/EntranceTypeEnum";
import Areas from "./DataObjects/AreasAndEntrances";
import Entrance from "./Entrance";
import React from "react";

export default class Area extends React.Component {

    returnUniqueItems = array => {
        return array.filter((item, i) => {
            return array.indexOf(item) === i;
        });
    };

    render() {
        let area = this.props.area;
        let entrances =  Object.keys(this.props.entrances);
        let availableInteriors = this.props.availableInteriors;
        let availableEntrances = this.props.availableEntrances;
        return(
            <div>
                <h2>{area}</h2>
                {entrances.map((entrance, i) => {
                    let entranceType = Areas[area][entrance].type;
                    return <Entrance
                        availableLocations={
                            entranceType === EntranceTypes.House ? this.returnUniqueItems(availableInteriors.house)
                            : entranceType === EntranceTypes.Dungeon ? availableInteriors.dungeon
                                : entranceType === EntranceTypes.Overworld ? availableEntrances.overworld
                                    : this.returnUniqueItems(availableInteriors.grotto)}
                        resetEntrance={this.props.resetEntrance}
                        resetOverworldEntrance={this.props.resetOverworldEntrance}
                        setOverworldToOverworld={this.props.setOverworldToOverworld}
                        setInteriorToAreaAndEntrance={this.props.setInteriorToAreaAndEntrance}
                        interior={this.props.entrances[entrance]}
                        entrance={entrance}
                        area={area}
                        key={i}
                    />
                })}
            </div>
        )
    }
}
