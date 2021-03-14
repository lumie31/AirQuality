import Head from "next/head";
import { useState } from "react";

import { useIntl, FormattedMessage } from "react-intl";

import {
  Heading,
  Container,
  Img,
  Select,
  Box,
  Text,
  Flex,
  Badge,
  Collapse,
  Button,
} from "@chakra-ui/react";

import data from "../locale/en.json";

const CITY_DATA_NAME = Object.entries(data).filter(
  ([key]) => key.startsWith("compare-tabs_1_city") && key.endsWith("name")
);

const Home = () => {
  const intl = useIntl();
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedCityIndex, setSelectedCityIndex] = useState<null | string>("");

  const [show, setShow] = useState(false);

  const handleToggle = () => setShow(!show);

  const locale = intl.locale;

  return (
    <>
      <Head>
        <title>AirQuality</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container maxW="container.md">
        <Heading
          mt={10}
          as="h1"
          bgClip="text"
          fontSize="4xl"
          textAlign="center"
          fontWeight="extrabold"
          bgGradient="linear(to-l, #7928CA,#FF0080)"
        >
          <FormattedMessage
            id="app_title"
            defaultMessage="The AirQuality App"
          />
        </Heading>
        <Box>
          <Heading
            as="h5"
            mt="3"
            mb="3"
            fontWeight="bold"
            fontSize="xl"
            textAlign="center"
          >
            <FormattedMessage id="hero_1_title" />
          </Heading>
          <Flex justifyContent="space-between" borderRadius="md" mb="2">
            <Badge variant="solid" colorScheme="green">
              <FormattedMessage id="article-info_1_date" />
            </Badge>
            <Badge variant="solid" colorScheme="green">
              <FormattedMessage id="article-info_1_category" />
            </Badge>
          </Flex>
        </Box>
        <Img
          borderRadius="md"
          src="https://news.files.bbci.co.uk/vj/live/idt-images/image-slider-hello/SMOG_vdyw4.jpg"
          alt="A picture of two men on an bike wearing a face mask"
        />
        <Text
          mt="3"
          mb="2"
          fontStyle="italic"
          lineHeight="1"
          fontSize="md"
          textAlign="justify"
        >
          <FormattedMessage id="p_1_value" />
        </Text>
        <Select
          mb="3"
          mt="3"
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
          <Box mb={5}>
            <Heading
              as="h2"
              mt={3}
              bgClip="text"
              fontSize="3xl"
              fontWeight="extrabold"
              bgGradient="linear(to-l, #7928CA,#FF0080)"
            >
              <FormattedMessage id="app_result" />
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
        <Box mb="2">
          <Collapse startingHeight={100} in={show}>
            <Text mb="2">
              <FormattedMessage id="p_2_value" />
            </Text>
            <Text mb="2" textAlign="justify">
              <FormattedMessage id="p_3_value" />
            </Text>
            <Text mb="2" textAlign="justify">
              <FormattedMessage id="p_4_value" />
            </Text>
            <Text mb="2" textAlign="justify">
              <FormattedMessage id="p_7_value" />
            </Text>
            <Text mb="2" textAlign="justify">
              <FormattedMessage id="p_8_value" />
            </Text>
            <Text mb="2" textAlign="justify">
              <FormattedMessage id="p_9_value" />
            </Text>
            <Text mb="2" textAlign="justify">
              <FormattedMessage id="p_10_value" />
            </Text>
          </Collapse>
          <Button size="sm" onClick={handleToggle} mt="2">
            Read {show ? "Less" : "More"}
          </Button>
        </Box>
        <Flex justifyContent="center" mb="2" mt="2">
          <FormattedMessage id="made_by" />
          {/* <Text>Made with ❤ by Olumide</Text> */}
        </Flex>
      </Container>
    </>
  );
};

export default Home;
