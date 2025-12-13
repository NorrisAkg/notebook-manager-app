import AsyncStorage from "@react-native-async-storage/async-storage";
import { usePathname } from "expo-router";
import { useEffect } from "react";

export function usePersistRoute() {
    const pathname = usePathname();

    useEffect(() => {
        AsyncStorage.setItem("LAST_ROUTE", pathname);
    }, [pathname]);
}