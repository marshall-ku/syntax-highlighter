import el from "../utils/el";
import { data, getAvailableThemes, setTheme } from "../utils/highlighter";

export default function SelectTheme() {
    const themes = getAvailableThemes();
    const Option = (value: string) =>
        el("option", { selected: value === data.theme }, value);

    return el(
        "div",
        {
            className: "select-container",
        },
        el("span", {}, "Theme: "),
        el(
            "select",
            {
                events: {
                    change: ({ target }) => {
                        if (!(target instanceof HTMLSelectElement)) {
                            return;
                        }

                        setTheme(themes[target.selectedIndex]);
                    },
                },
            },
            ...themes.map((theme) => Option(theme))
        )
    );
}
