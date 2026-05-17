import { Show } from '@clerk/expo'
import { AuthView, UserButton } from '@clerk/expo/native'
import { View } from 'react-native'

export default function Screen() {
  return (
    <>
      <Show when="signed-in">
        <View style={{ width: 36, height: 36, borderRadius: 18, overflow: 'hidden' }}>
          <UserButton />
        </View>
      </Show>
      <Show when="signed-out">
        <AuthView />
      </Show>
    </>
  )
}