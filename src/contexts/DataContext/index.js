import PropTypes from "prop-types";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  useMemo,
} from "react";

const DataContext = createContext({});

export const api = {
  loadData: async () => {
    const json = await fetch("/events.json");
    return json.json();
  },
};

export const DataProvider = ({ children }) => {
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const getData = useCallback(async () => {
    try {
      const loadedData = await api.loadData();
      const sortedEvents = loadedData.events
        ? loadedData.events.sort((a, b) => new Date(b.date) - new Date(a.date))
        : [];
      const lastEvent = sortedEvents[0] || null;
      setData({
        ...loadedData,
        events: sortedEvents,
        last: loadedData.last || lastEvent,
      });
    } catch (err) {
      setError(err);
    }
  }, []);


  useEffect(() => {
    if (data) return;
    getData();
  }, [data, getData]);

  useEffect(() => {
    // console.log("Data loaded:", data);
  }, [data]);


  const providerValue = useMemo(() => ({
    data,
    error,
  }), [data, error]);

  return (
    <DataContext.Provider value={providerValue}>
      {children}
    </DataContext.Provider>
  );
};

DataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useData = () => useContext(DataContext);

export default DataContext;