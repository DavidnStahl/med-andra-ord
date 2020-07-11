import React, { useEffect, useState } from "react";
import Input from "@material-ui/core/Input";

function TeamNameList(props) {
  useEffect(() => {
    if (props.teamNames.length == 0) {
      let teamArray = [];
      for (let index = 0; index < props.noOfTeams; index++) {
        teamArray.push(`Lag ${index + 1}`);
      }
      props.setTeamNames(teamArray);
    }
  }, [props.noOfTeams]);

  function handleTeamNameChange(value, index) {
    let teamNamesArray = props.teamNames;
    teamNamesArray[index] = value;
    props.setTeamNames(teamNamesArray);
    console.log("teamnames =", props.teamNames);
  }

  return (
    <div>
      {props.teamNames.map((teamName, index) => {
        return (
          <div key={index}>
            <Input
              onChange={(e) => {
                handleTeamNameChange(e.target.value, index);
              }}
              defaultValue={teamName}
            ></Input>
          </div>
        );
      })}
    </div>
  );
}

export default TeamNameList;
