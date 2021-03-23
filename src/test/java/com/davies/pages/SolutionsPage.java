package com.davies.pages;

import com.davies.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class SolutionsPage{

    public SolutionsPage() {
        PageFactory.initElements(Driver.get(), this);
    }

    @FindBy(css = "li#menu-item-18257 > a")
    public WebElement solutionsModule;

    @FindBy(css = ".cta-button__circle.view-all__circle")
    public WebElement viewAllButton;

    @FindBy(css = ".cta-button__circle.learn-more__circle")
    public WebElement loadMoreButton;

    @FindBy(partialLinkText = "Fire investigation")
    public WebElement fireInvestigationCase;

    @FindBy(xpath = "//p[contains(text(),'outlay')]")
    public WebElement ResultsText;


}
