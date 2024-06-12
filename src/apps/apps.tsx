import ReactDOM from "react-dom/client";
import { createTheme, MantineProvider } from "@mantine/core";
import { useEffect } from "react";
import { apps } from "../../bin/app-registry";

const theme = createTheme({
  /** Put your mantine theme override here */
});

interface ComponentMap {
  [key: string]: () => Promise<{ default: React.ComponentType<unknown> }>;
}

interface Props {
  [key: string]: unknown;
}

const parseProps = (propsJson: string | null): Props => {
  if (!propsJson) return {};

  try {
    return JSON.parse(propsJson);
  } catch (e) {
    console.error(`Error parsing props JSON: ${e}`);
    return {};
  }
};

const initializeComponentMap = (): ComponentMap => {
  const componentMap: ComponentMap = {};

  const addComponentToMap = (appName: string) => {
    const existsOnPage = !!document.querySelector(`[data-app="${appName}"]`);
    if (existsOnPage) {
      componentMap[appName] = () => import(`./${appName}/${appName}.tsx`);
    }
  };

  if (apps) {
    apps.forEach(addComponentToMap);
  }

  return componentMap;
};

const renderAppToElement = async (el: Element, componentMap: ComponentMap) => {
  const appName = el.getAttribute("data-app");
  const props = parseProps(el.getAttribute("data-props"));

  if (appName && componentMap[appName]) {
    const appModule = await componentMap[appName]();
    const App = appModule.default;
    const root = ReactDOM.createRoot(el);
    root.render(
      <MantineProvider theme={theme} defaultColorScheme="auto">
        <App {...props} />
      </MantineProvider>
    );
  }
};

export const renderApps = () => {
  const componentMap = initializeComponentMap();
  document
    .querySelectorAll("[data-app]")
    .forEach((el) => renderAppToElement(el, componentMap));
};

export const withRenderApps = (Story: any) => {
  useEffect(() => {
    renderApps();
  }, []);

  return <Story />;
};
