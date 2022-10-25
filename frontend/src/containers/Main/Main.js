import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {fetchEventsRequest} from "../../store/actions/eventsActions";

const Main = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEventsRequest());
  }, [dispatch]);

  return (
    <div>

    </div>
  );
};

export default Main;