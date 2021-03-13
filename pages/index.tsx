import Head from "next/head";
import { useState } from "react";

import { useIntl, FormattedMessage } from "react-intl";

import { Heading, Container, Img, Select, Box, Text } from "@chakra-ui/react";

import data from "../locale/en.json";

const CITY_DATA_NAME = Object.entries(data).filter(
  ([key]) => key.startsWith("compare-tabs_1_city") && key.endsWith("name")
);

const Home = () => {
  const intl = useIntl();
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedCityIndex, setSelectedCityIndex] = useState<null | string>("");

  const locale = intl.locale;

  return (
    <>
    <Head>
      <title>AirQuality</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Container>
      <Heading
        mt={10}
        as="h1"
        bgClip="text"
        fontSize="4xl"
        textAlign="center"
        fontWeight="extrabold"
        bgGradient="linear(to-l, #7928CA,#FF0080)"
      >
        <FormattedMessage id="app_title" defaultMessage="The AirQuality App" />
      </Heading>

      <Img
        mt={5}
        borderRadius="md"
        src="https://news.files.bbci.co.uk/vj/live/idt-images/image-slider-hello/SMOG_vdyw4.jpg"
      />

      <Select
        mt={5}
        variant="outline"
        borderColor="black"
        value={selectedCity}
        placeholder={intl.formatMessage({
          id: "compare-tabs_1_title",
          defaultMessage: "Select your city",
        })}
        onChange={(evt) => {
          const cityName = evt.target.value;

          if (!cityName) {
            setSelectedCity("");
            setSelectedCityIndex("");
            return;
          }

          setSelectedCity(cityName);

          const resource = require(`../locale/${locale}.json`);
          const city = Object.entries(resource).find(
            ([_, value]) => value === cityName
          );
         
          const cityParts = city[0].split("_");
          const cityIndex = cityParts[cityParts.length - 2];

          setSelectedCityIndex(cityIndex);
        }}
      >
        {CITY_DATA_NAME.map(([key, value]) => {
          return (
            <option key={key}>
              {intl.formatMessage({
                id: key,
                defaultMessage: value,
              })}
            </option>
          );
        })}
      </Select>

      {selectedCityIndex && (
        <Box mb={10}>
          <Heading as="h2" mt={5}>
            <FormattedMessage
              id="app_result"
              defaultMessage="The AirQuality App"
            />
          </Heading>
          <Text>
            <FormattedMessage
              id="in_cigarettes"
              defaultMessage="In cigarettes"
            />
            :{" "}
            <strong>
              <FormattedMessage
              id={data[`compare-tabs_1_city_${selectedCityIndex}_cigg`]}
              />
            </strong>
          </Text>
          <Text>
            {" "}
            <FormattedMessage
              id="in_particulate_matter"
              defaultMessage="In particulate matter"
            />
            :{" "}
            <strong>
              <FormattedMessage
              id={data[`compare-tabs_1_city_${selectedCityIndex}_aqi`]}
              />
            </strong>
          </Text>
        </Box>
      )}
    </Container>
    </>
  );
};

export default Home;
