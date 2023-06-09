import { create } from "zustand";
import { persist, createJSONStorage } from 'zustand/middleware';

export const themes = {
    LIGHT: 'light',
    DARK: 'dark'
};

/* 
    Creating a global theme storage with usage of the persist middleware.
    The persist middleware makes sure to store the storage data inside the localStorage
    and to retrieve this data from the localStorage on initial page load.
    This becomes very handy when storing some user settings for the page (e.g. dark/light theme)
    or for storing authentication information like auth tokens.
*/
const useThemeStore = create(
    persist(
        (set) => {
            return {
                theme: themes.LIGHT,
                setTheme: (newTheme) => set({theme: newTheme}),
                toggleTheme: () => set( currState => {
                    return {
                        theme: currState.theme === themes.LIGHT ? themes.DARK : themes.LIGHT
                    };
                })
            };
        },
        {
            name: 'theme-storage',
            storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
        }
    )
);

export default useThemeStore;