import { dbTypeChecking } from "./dbTypeChecking.js";

const extractAtomData = async (rawAtomData) => {
  let processedData = [];

  return new Promise((resolve, reject) => {
    const atomData = rawAtomData.feed.entry;

    if (!Array.isArray(atomData)) {
      const err = new Error(`Atom data does not match required format`);
      console.error(err);
      reject(err);
    }

    atomData.forEach((data) => {
      const { title, link, id, published, updated, summary, author } = data;

      let individualEntry = {
        title: title[0],
        link: link[0].$.href,
        id: id[0],
        published: published[0],
        updated: updated[0],
        summary: summary[0],
        author: author[0],
      };

      if (!dbTypeChecking(individualEntry)) {
        const err = new Error(`Atom data does not match required format`);
        console.error(err);
        reject(err);
      } else {
        processedData.push(individualEntry);
      }
    });
    resolve(processedData);
  });
};

export default extractAtomData;
