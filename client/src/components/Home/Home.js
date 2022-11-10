import React, { useEffect, useState } from "react";
import {
  AppBar,
  Chip,
  Container,
  Grid,
  Grow,
  Paper,
  TextField,
} from "@material-ui/core";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import useStyles from "./styles";
import { getPosts } from "../../actions/posts";
import Form from "../Form/Form";
import Posts from "../Posts/Posts";
import Pagination from "../Pagination";
import ChipInput from "material-ui-chip-input";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Home = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState(null);
  const [search, setSearch] = useState("");
  const [tags, setTags] = useState([]);
  const query = useQuery();
  const navigate = useNavigate();
  const page = query.get("page") || 1;
  const searchQuery = query.get("searchQuery");

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  //handle search key press
  const handleSearchKeyPress = (e) => {
    if (e.key === "Enter") {
      console.log("search");
    }
  };

  //handle chip add
  const handleChipAdd = (tag) => {
    setTags([...tags, tag]);
  };

  //handle chip delete
  const handleChipDelete = (tagToDelete) => {
    setTags(tags.filter((tag) => tag !== tagToDelete));
  };

  return (
    <Grow in>
      <Container maxWidth="xl">
        <Grid
          container
          justifyContent="space-between"
          alignItems="stretch"
          spacing={3}
          className={classes.gridContainer}
        >
          <Grid item xs={12} sm={6} md={9}>
            <Posts setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppBar
              className={classes.appBarSearch}
              position="static"
              color="inherit"
            >
              <TextField
                name="search"
                variant="outlined"
                label="Search memories"
                fullWidth
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
                onKeyPress={handleSearchKeyPress}
              />
              <ChipInput
                style={{ margin: "10px 0" }}
                value={tags}
                onAdd={handleChipAdd}
                onDelete={handleChipDelete}
                label="Search Tags"
                variant="outlined"
              />
            </AppBar>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
            <Paper elevation={6}>
              <Pagination />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;
