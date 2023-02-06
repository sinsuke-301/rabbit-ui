// @ts-nocheck
// This file is generated by Umi automatically
// DO NOT CHANGE IT MANUALLY!
import React, { useState, useEffect, useRef } from 'react';
import { useOutlet, history } from 'dumi';
<<<<<<< HEAD
import { SiteContext } from 'C:/Users/82068/Desktop/rabbit-UI/rabbit-ui/node_modules/dumi/dist/client/theme-api/context.js';
=======
import { SiteContext } from 'D:/Desktop/rabbit-ui/node_modules/dumi/dist/client/theme-api/context.js';
>>>>>>> d10a81420b0a45802b312fba20bc50d3b5b2a957
import { demos, components } from '../meta';
import { locales } from '../locales/config';

const entryExports = {
  
  
};

export default function DumiContextWrapper() {
  const outlet = useOutlet();
  const [loading, setLoading] = useState(true);
  const prev = useRef(history.location.pathname);

  useEffect(() => {
    return history.listen((next) => {
      if (next.location.pathname !== prev.current) {
        prev.current = next.location.pathname;

        // mark loading when route change, page component will set false when loaded
        setLoading(true);

        // scroll to top when route changed
        document.documentElement.scrollTo(0, 0);
      }
    });
  }, []);

  return (
    <SiteContext.Provider value={{
      pkg: {"name":"rabbit-ui","description":"","version":"1.0.0","license":"ISC","author":""},
      entryExports,
      demos,
      components,
      locales,
      loading,
      setLoading,
      themeConfig: {"footer":"Copyright © 2023 | Powered by <a href=\"https://d.umijs.org\" target=\"_blank\" rel=\"noreferrer\">dumi</a>","prefersColor":{"default":"light","switch":true}},
    }}>
      {outlet}
    </SiteContext.Provider>
  );
}
