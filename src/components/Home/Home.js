import * as React from "react";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import { Stack, Button } from "@mui/material";
import petitions from "../Petitions";
import { List } from "antd";
import "antd/dist/antd.min.css";
import { useState, useEffect } from "react";
import "./Home.scss";

export default function Home() {
  const [people, setPeople] = useState([]);
  useEffect(() => {
    getData();
  }, [people]);

  const getData = async () => {
    const response = await petitions.GetPeople();
    setPeople(response);
  };

  const createPerson = async () => {
    await petitions.CreatePerson();
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl">
        <div className="Home">
          <h2>PEOPLE</h2>
          <List
            style={{ background: "#e8f0f2" }}
            itemLayout="horizontal"
            dataSource={["this data is to show a single column"]}
            renderItem={() => (
              <List.Item>
                <List.Item.Meta title={<h5>First Name</h5>}></List.Item.Meta>
                <List.Item.Meta title={<h5>Last Name</h5>}></List.Item.Meta>
                <List.Item.Meta title={<h5>Birthday</h5>}></List.Item.Meta>
                <List.Item.Meta
                  title={<h5>City Of Residence</h5>}
                ></List.Item.Meta>
                <List.Item.Meta title={<h5>Mail</h5>}></List.Item.Meta>
              </List.Item>
            )}
          />
          <List
            style={{ background: "#c2dbfa" }}
            itemLayout="horizontal"
            dataSource={people}
            renderItem={(p) => (
              <List.Item>
                <List.Item.Meta title={p.first_name}></List.Item.Meta>
                <List.Item.Meta title={p.last_name}></List.Item.Meta>
                <List.Item.Meta title={p.birthday}></List.Item.Meta>
                <List.Item.Meta title={p.city_of_residence}></List.Item.Meta>
                <List.Item.Meta title={p.email}></List.Item.Meta>
              </List.Item>
            )}
          />
        </div>
      </Container>
      <Stack
        direction="row"
        ml={5}
        mr={5}
        mb={2}
        justifyContent="space-between"
        alignItems="flex-start"
        spacing={8}
      >
        <Button
          size="small"
          variant="contained"
          style={{ background: "#053742" }}
          onClick={() => createPerson()}
        >
          CREATE
        </Button>
      </Stack>
    </React.Fragment>
  );
}
