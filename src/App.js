import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Message from "./components/messages/Message";
import ExplorePage from "./pages/ExplorePage";
import FavouritePage from "./pages/FavouritePage";
import MatchesPage from "./pages/MatchesPage";
import {
  AccountRoute,
  DashboardRoute,
  LoginRoute,
  MessagesRoute,
  SignUpRoute,
} from "./routes/routes";

function App() {
  const [apisData, setApisData] = React.useState([]);
  const [allData, setAllData] = React.useState([]);

  React.useEffect(() => {
    const urls = [
      "https://jsonplaceholder.typicode.com/users",
      "https://jsonplaceholder.typicode.com/todos",
      "https://jsonplaceholder.typicode.com/posts",
    ];

    Promise.all([
      fetch("https://jsonplaceholder.typicode.com/posts"),
      fetch("https://jsonplaceholder.typicode.com/users"),
    ])
      .then(function (responses) {
        // Get a JSON object from each of the responses
        return Promise.all(
          responses.map(function (response) {
            return response.json();
          })
        );
      })
      .then(function (data) {
        // Log the data to the console
        // You would do something with both sets of data here
        setApisData(data);
      })
      .catch(function (error) {
        // if there's an error, log it
      });
  }, []);

  React.useEffect(() => {
    let tempArr = [];
    apisData?.map((item) => {
      console.log("Item", item);
      item?.map((val) => {
        const tempData = {
          id: val?.id,
          name: val?.name || val?.title,
        };
        tempArr.push(tempData);
      });
    });

    setAllData(tempArr);
  }, [apisData]);

  console.log("DATA", allData);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashboardRoute />} />
          <Route path="/matches" element={<MatchesPage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/favourite" element={<FavouritePage />} />
          <Route path="/account" element={<AccountRoute />} />
          <Route path="/messages" element={<MessagesRoute />} />
          <Route path="/messages/:id" element={<Message />} />
          <Route path="/login" element={<LoginRoute />} />
          <Route path="/signup" element={<SignUpRoute />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
