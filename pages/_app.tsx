import { useState } from "react";
import { ChakraProvider, Flex, Img } from "@chakra-ui/react";
import { IntlProvider, FormattedMessage } from "react-intl";

import en from "../locale/en.json";
import hi from "../locale/hi.json";

export const intlMessages = {
  en,
  hi,
};



function MyApp({ Component, pageProps }) {
  const [lang, setLang] = useState<keyof typeof intlMessages>("en");
  
  return (
    <ChakraProvider>
      <IntlProvider
        locale={lang}
        defaultLocale={lang}
        messages={intlMessages[lang]}
      >
        <Flex justifyContent="flex-end" pt={5}>
          <Img
            mr={3}
            w={10}
            h={5}
            cursor="pointer"
            onClick={() => setLang("en")}
            src="https://upload.wikimedia.org/wikipedia/commons/4/42/Flag_of_the_United_Kingdom.png"
            alt="English flag"
          />
          <Img
            w={10}
            h={5}
            mr={10}
            cursor="pointer"
            onClick={() => setLang("hi")}
            src="https://cdn.pixabay.com/photo/2018/12/10/10/02/flag-3866559__480.jpg"
            alt="Hindi flag"
          />
        </Flex>
        <Component {...pageProps} />
      </IntlProvider>
    </ChakraProvider>
  );
}

export default MyApp;
