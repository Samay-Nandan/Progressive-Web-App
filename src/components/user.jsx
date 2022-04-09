import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { get } from "axios";
import { putValue, getAllValue, clearDB } from "../indexDB";
import { toast } from 'react-toastify';
import { Loader, H1, P, Grid, Card } from "../styles";

const API_ENDPOINT = "https://jsonplaceholder.typicode.com/users";
const DATABASE = "USER";
const TABLE = "STORE";

const User = () => {
  const { id } = useParams();
  const [ user, setUser ] = useState();
  const [ loading, setLoading ] = useState(true);

  const fetchUserOnline = async () => {
    const { data } = await get(API_ENDPOINT + "/" + id)
    await clearDB(DATABASE, TABLE)
    await putValue(DATABASE, TABLE, data)
    setUser(data)
    setLoading(false)
    toast.success("User Fetched Online")
  }

  const fetchUserOffline = async () => {
      setUser(await getAllValue(DATABASE, TABLE))
      setLoading(false)
      toast.success("User Fetched Offline")
  }

  useEffect(()=> {
      if(navigator.onLine) return fetchUserOnline();
      fetchUserOffline();
  },[])

  if(loading) return <Loader />
    
  return (
    <Card>
      <Grid>
        <H1>Name </H1>
        <P>{user?.name}</P>
        <H1>Email </H1>
        <P>{user?.email}</P>
        <H1>Address  </H1>
        <P>{user?.address?.street + ", " + user?.address?.city}</P>
        <H1>Geolocation  </H1>
        <P>{user?.address?.geo?.lat + ", " + user?.address?.geo?.lng}</P>
        <H1>Phone </H1>
        <P>{user?.phone}</P>
        <H1>Website </H1>
        <P>{user?.website}</P>
        <H1>Company </H1>
        <P>{user?.company.name}</P>
      </Grid>
    </Card>

  )
}

export default User