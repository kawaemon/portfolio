"use client";

import { FC } from "react";
import { Tooltip } from "react-tooltip";

export const SkillsTooltip: FC = () => (
    <>
        <Tooltip anchorSelect=".marker-fine">一通り使える</Tooltip>
        <Tooltip anchorSelect=".marker-learning">勉強中</Tooltip>
    </>
);
