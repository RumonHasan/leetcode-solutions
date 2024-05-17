const domainVisits = (cpdomains) => {
  let domainMap = new Map();
  let domainStack = [];
  for (let cpDomain of cpdomains) {
    const [visits, domains] = cpDomain.split(' ');
    const domainList = domains.split('.');
    let subDomains = [];
    let domainCombinations = [];
    for (let d = domainList.length - 1; d >= 0; d--) {
      domainCombinations.unshift(domainList[d]);
      subDomains.push(domainCombinations.join('.'));
    }
    for (let subDomain of subDomains) {
      if (domainMap.has(subDomain)) {
        domainMap.set(subDomain, domainMap.get(subDomain) + parseInt(visits));
      } else {
        domainMap.set(subDomain, parseInt(visits));
      }
    }
  }
  for (let [key, value] of domainMap) {
    domainStack.push(`${value} ${key}`);
  }
  return domainStack;
};

console.log(
  domainVisits([
    '900 google.mail.com',
    '50 yahoo.com',
    '1 intel.mail.com',
    '5 wiki.org',
  ])
);
