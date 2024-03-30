import React, { useEffect, useState } from "react";
import GraphTest from "../GraphTest";
import { useSelector } from "react-redux";
import { View, Text } from "react-native";

export default function ReportScreen() {
  const entities = useSelector((state) => state);
  const [completed, setSetCompleted] = useState();
  const [notComp, setNotcomp] = useState();

  const Projectarr = entities.Project;

  function getCount() {
    let counter = 0;
    let totalcount = 0;
    Projectarr.map((item, index) => {
      totalcount++;
      if (item.Completed === false) {
        counter++;
      }
      setSetCompleted(totalcount - counter);
      setNotcomp(counter);
    });
  }

  useEffect(() => {
    getCount();
  });

  const pieData = [
    { value: completed, color: "#dddddd" },
    { value: notComp, color: "#79D2DE" },
  ];

  return (
    <View>
      {Projectarr && Projectarr.length > 0 ? (
        <GraphTest data={pieData} />
      ) : (
        <View style={{ marginTop: 100 }}>
          <Text>Please add more tasks</Text>
        </View>
      )}
    </View>
  );
}
