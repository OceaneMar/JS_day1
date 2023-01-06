const main = (obj) => Object.entries(obj)
                            .filter(([_, value]) => ["string", "number"].includes(typeof(value)))
                            .map(([key, value]) => `${key}: ${value}`)
                            .join(", ");

module.exports = main;