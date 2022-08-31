import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth'
import { NavigationContainer } from '@react-navigation/native'
import { useState, useEffect } from 'react'

import { AppRoutes } from './app.routes'
import { SignIn } from '../pages/SignIn'
import { Loading } from '../components/Loading'

export function Routes(){
  const [isLoading, setLoading] = useState(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User>();

  useEffect(() => {
    const subscriber = auth()
    .onAuthStateChanged(response => {
      setUser(response);
      setLoading(false);
    });

    return subscriber;
  }, []);

  if(isLoading){
    return <Loading />
  }

  return(
    <NavigationContainer>
      {user ? <AppRoutes /> : <SignIn />}
    </NavigationContainer>
  )
}