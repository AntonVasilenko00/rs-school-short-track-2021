/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const DNS = {};
  domains.forEach((domain) => {
    const subDomains = domain.split('.').reverse();
    subDomains.forEach((subDomain, index) => {
      const sub = `.${subDomains.slice(0, index + 1).join('.')}`;
      if (sub in DNS) DNS[sub]++;
      else DNS[sub] = 1;
    });
  });
  return DNS;
}
module.exports = getDNSStats;
