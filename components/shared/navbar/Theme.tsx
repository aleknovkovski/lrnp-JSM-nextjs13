'use client'
import React from "react";
import {useTheme} from "@/context/ThemeProvider";

export default function Theme () {
    const {mode, setMode} = useTheme()
    return (
        <>Theme </>
    );
}
