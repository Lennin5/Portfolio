import React from "react";
import { useMediaQuery } from "react-responsive";

export function useMediaXs() {
    return useMediaQuery({ query: "(max-width: 576px)" });
}

export function useMediaSm() {
    return useMediaQuery({ query: "(min-width: 576px)" });
}

export function useMediaMd() {
    return useMediaQuery({ query: "(min-width: 768px)" });
}

export function useMediaLg() {
    return useMediaQuery({ query: "(min-width: 992px)" });
}

export function useMediaXl() {
    return useMediaQuery({ query: "(min-width: 1200px)" });
}

export function useMediaXxl() {
    return useMediaQuery({ query: "(min-width: 1400px)" });
}