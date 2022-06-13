using OpenQA.Selenium;

namespace WebApp.UITests.PageObjectModels
{
    class Page
    {
        protected IWebDriver Driver;
        protected virtual string Url { get; }
        protected virtual string Title { get; }

        public void NavigateTo()
        {
            Driver.Navigate().GoToUrl(Url);
            EnsurePageLoaded();
        }

        /// <summary>
        /// Check that the url and page title are as expected
        /// </summary>
        /// <param name="onlyCheckUrlStartWithExpected"></param>
        public void EnsurePageLoaded(bool onlyCheckUrlStartWithExpected = true)
        {
            bool urlIsCorrect;
            if (onlyCheckUrlStartWithExpected)
            {
                urlIsCorrect = Driver.Url.StartsWith(Url);
            }
            else
            {
                urlIsCorrect = Url == Driver.Url;
            }

            if (!urlIsCorrect)
            {
                throw new System.Exception($"Failed to load page. Page url is {Driver.Url} and Page title is {Driver.Title}. Page source is \r\n {Driver.PageSource} ");
            }
        }
    }
}
