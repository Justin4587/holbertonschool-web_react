import { getFullYear, getFooterCopy, getLatestNotification } from './utils';


describe('getFullYear', () => {
  it('should return correct year', () => {
    expect(getFullYear()).toBe(new Date().getFullYear())
  })
});


describe('getFooterCopy', () => {
  it('on false', () => {
    expect(getFooterCopy(false)).toEqual("Holberton School main dashboard")
  })

  it('on true', () => {
    expect(getFooterCopy(true)).toEqual("Holberton School")
  })
})

describe('getLatestNotification', () => {
  it('should return string', () => {
    expect(getLatestNotification()).toEqual("<li data-priority='urgent'><strong>Urgent requirement</strong> - complete by EOD</li>")
  })
})
