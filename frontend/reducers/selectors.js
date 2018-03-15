import { values } from 'lodash';

export const selectAllPosts = (state) => _.values(state.entities.posts);

export const selectAllFeedItems = (state) => Array.prototype.concat(
  _.values(state.entities.posts), _.values(state.entities.workouts)).sort(compare);

export const selectAllUsers = (state) => _.values(state.entities.users);

export const selectSearchedUsers = (state) => _.values(state.search.users);

export const styleWorkoutsForVisualization = (workouts, type) => {
  let data = setData();
  if (type === "number") {
    _.values(workouts).forEach ((el) => {
      const df = formatDate(el.date);
      debugger
      data[df]++;
    });
  } else if (type === "distance") {
    _.values(workouts).forEach ((el) => {
      const df = formatDate(el.date);
      data[df] = data[df] + el.distance;
    });
  } else if (type === "elevation") {
    _.values(workouts).forEach ((el) => {
      const df = formatDate(el.date);
      data[df] = data[df] + el.distance;
    });
  } else {
    _.values(workouts).forEach ((el) => {
      const df = formatDate(el.date);
      data[df] = data[df] + el.duration;
    });
  }
  console.log(data);
  let arr = _.keys(data).map(el => [new Date(el), data[el]]);
  return arr;

};


const compare = (a, b) => {
  if (a.created_at > b.created_at)
    return -1;
  if (a.created_at < b.created_at)
    return 1;
  return 0;
};

const formatDate = (date) => {
  const dateArr = date.split("-");
  const result = dateArr.map((el, i) => {
    if (i === 0) {
      return el;
    } else if (i === 1) {
      return el.replace(/^0+/, '');
    } else {
      return el.split("T")[0].replace(/^0+/, '');
    }
  });
  return result.join(", ");
};

const setData = () => {
  const currentDate = new Date();
  let data = {};
  for (var i = 0; i <= currentDate.getMonth(); i++) {
    if (i !== currentDate.getMonth()) {
      const daysInMonth = new Date(currentDate.getFullYear(), i + 1, 0).getDate();
      for (var j = 1; j <= daysInMonth; j++) {
        data[`${currentDate.getFullYear()}, ${i + 1}, ${j}`] = 0;
      }
    } else {
      for (var k = 1; k <= currentDate.getDate(); k++) {
        data[`${currentDate.getFullYear()}, ${i + 1}, ${k}`] = 0;
      }
    }
  }
  return data;
};
