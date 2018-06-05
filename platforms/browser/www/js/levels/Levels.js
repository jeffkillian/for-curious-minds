
import React from "react"
import Level0Store from "./Level0Store"
import Level0 from "./Level0"
import Level1Store from "./Level1Store"
import Level1 from "./Level1"
import Level2 from "./Level2"
import Level2Store from "./Level2Store"
import Level3 from "./Level3"
import Level3Store from "./Level3Store"
import Level4 from "./Level4"
import Level4Store from "./Level4Store"
const levels = []
// addLevelToLevels(< Level3 />,new Level3Store())
addLevelToLevels(< Level4 />,new Level4Store())
// addLevelToLevels(< Level0 /> ,new Level0Store())
// addLevelToLevels(< Level1 />,new Level1Store())
// addLevelToLevels(< Level2 />,new Level2Store())




function addLevelToLevels(component, store){
    levels.push({
        component: component,
        store:store
    })

}

module.exports = levels