
import React from "react"
import Level0Store from "./Level0Store"
import Level0 from "./Level0"
import Level1Store from "./Level1Store"
import Level1 from "./Level1"
import Level2 from "./Level2"
import Level2Store from "./Level2Store"

const levels = []

//addLevelToLevels(< Level0 />,new Level0Store())
//addLevelToLevels(< Level1 />,new Level1Store())
addLevelToLevels(< Level2 />,new Level2Store())




function addLevelToLevels(component, store){
    levels.push({
        component: component,
        store:store
    })

}

module.exports = levels