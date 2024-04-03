import React from "react";
import * as stylex from "@stylexjs/stylex";
import { FaDiceD20, FaPager, FaPaintbrush } from "react-icons/fa6";

const styles = stylex.create({
  text: {
    fontSize: 100,
    fontFamily: 'Bebas Neue',
    fontWeight: 500
  },

  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
  },

  header: {
    display: "flex",
    justifyContent: "center",
    padding: 20,
    fontSize: 32,
  },

  itemList: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
    marginTop: 20,
  },

  item: {
    display: "flex",
    alignItems: "center",
    gap: 3,
    padding: 10,
    background: "white",
    borderWidth: 10,
    borderColor: 'red',
    borderRadius: 10
  },

  itemText: {
    fontSize: 12,
    fontStyle: "normal",
  },

  itemIcon: {
    width: 30,
    height: 30,
    marginTop: 0,
  },
});

const listItem = [
  {
    category: "Programmer",
    categoryIcon: <FaDiceD20 />,
  },
  {
    category: "Graphic Designer",
    categoryIcon: <FaPaintbrush />,
  },
  {
    category: "UI/UX",
    categoryIcon: <FaPager />,
  },
];

export default function About() {
  return (
    <div {...stylex.props(styles.container)}>
      <div {...stylex.props(styles.header,styles.text)}>
        <p>
          PASSION DUTY <span>LEARNING MORE</span>
        </p>
      </div>
      <div {...stylex.props(styles.itemList)}>
        {listItem.map((item, index) => {
          return (
            <React.Fragment key={index}>
              <div {...stylex.props(styles.item)}>
                <div {...stylex.props(styles.itemIcon)}>{item.categoryIcon}</div>
                <p>{item.category}</p>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}
