import { useState } from "react";
import {
  StyleSheet,
  Text,
  Dimensions,
  View,
  ScrollView,
  TextInput,
  SafeAreaView,
  StatusBar,
  Platform,
  TouchableOpacity,
  Switch,
} from "react-native";

const { width } = Dimensions.get("window");

export default function App() {
  const [todos, setTodos] = useState([]);
  const [currTodo, setCurrTodo] = useState("");
  const [isDarkModeEnabled, setIsDarkModeEnabled] = useState(false);
  const styles = isDarkModeEnabled ? dark : light;
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollContainer}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.header}>
          <Text style={styles.darkModeTxt}>Dark mode</Text>
          <View>
            <Switch
              trackColor={{ false: "#aeaeae", true: "gray" }}
              thumbColor={isDarkModeEnabled ? "white" : "gray"}
              value={isDarkModeEnabled}
              onValueChange={() => {
                setIsDarkModeEnabled((pre) => !pre);
              }}
            />
          </View>
        </View>
        <View>
          <TextInput
            type="text"
            value={currTodo}
            onChangeText={(val) => {
              setCurrTodo(val);
            }}
            style={styles.input}
            multiline={true}
            placeholder='Type your "todo"'
            placeholderTextColor={isDarkModeEnabled ? "gray" : "gray"}
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-end",
              paddingLeft: 6,
            }}
          >
            <TouchableOpacity
              onPress={() => {
                if (currTodo) {
                  setTodos((prev) => [...prev, currTodo]);
                  setCurrTodo("");
                }
              }}
            >
              <View style={styles.addBtn}>
                <Text style={styles.addBtnTxt}>Add</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        {todos.map((data) => (
          <View style={styles.todoCtn}>
            <Text style={styles.todo}>{data}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const light = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
    backgroundColor: "#eeeeee",
  },
  scrollContainer: {
    flex: 1,
    marginTop: 24,
    marginHorizontal: width * 0.05,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    height: 48,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5.62,
    elevation: 8,
    backgroundColor: "white",
    borderRadius: 6,
    paddingLeft: 6,
  },
  addBtn: {
    backgroundColor: "white",
    paddingHorizontal: 24,
    marginTop: 18,
    paddingVertical: 6,
    borderRadius: 8,
  },
  todoCtn: {
    backgroundColor: "white",
    marginVertical: 12,
    paddingVertical: 10,
    paddingHorizontal: 6,
    borderRadius: 16,
  },
  todo: {
    color: "gray",
    fontSize: 18,
  },

  darkModeTxt: { color: "black" },
  addBtnTxt: { fontSize: 18, color: "black" },
});
const dark = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
    backgroundColor: "#282828",
  },
  scrollContainer: {
    flex: 1,
    marginTop: 24,
    marginHorizontal: width * 0.05,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    height: 48,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5.62,
    elevation: 8,
    backgroundColor: "black",
    color: "white",
    borderRadius: 6,
    paddingLeft: 6,
  },
  addBtn: {
    backgroundColor: "black",
    color: "white",
    paddingHorizontal: 24,
    marginTop: 18,
    paddingVertical: 6,
    borderRadius: 8,
  },
  addBtnTxt: {
    color: "gray",
  },
  todoCtn: {
    backgroundColor: "black",
    marginVertical: 12,
    paddingVertical: 10,
    paddingHorizontal: 6,
    borderRadius: 16,
  },
  todo: {
    color: "gray",
    fontSize: 18,
  },
  darkModeTxt: {
    color: "gray",
    fontSize: 18,
  },
});
