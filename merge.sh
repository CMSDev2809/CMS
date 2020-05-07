git pull origin master
cd /CMS/compliancemonitoringsystems.com
npm run build
rm -rf /var/www/compliancemonitoringsystems.com/html/build
mv build /var/www/compliancemonitoringsystems.com/html
cd /CMS/communitysupervision.org
npm run build
rm -rf /var/www/communitysupervision.org/html/build
mv build /var/www/communitysupervision.org/html
sudo systemctl restart httpd.service
